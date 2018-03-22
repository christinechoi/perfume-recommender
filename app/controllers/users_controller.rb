

class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json

  end


  def create
    # binding.pry
    user = User.new(user_params)
    if user.save
      render json: { message: 'User created successfully', user: user.to_json },
             status: 201
    else
      render json: { errors: user.errors.full_messages },
             status: :bad_request
    end
  end


  def login
    user = User.find_by(email: params[:email].to_s.downcase)
    # binding.pry
    if user && user.authenticate(params[:password])
        id_token = JsonWebToken.encode({user_id: user.id})
        render json: {token: id_token, status: :ok}
    else
      render json: {error: 'Invalid username / password'}, status: :unauthorized
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
