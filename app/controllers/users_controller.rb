

class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users.to_json

  end


  def create
    # binding.pry
    user = User.new(user_params)
    if user.save
      authenticate_for(user)

      render json: { message: 'User created successfully', user: user.to_json },
             status: 201
    else
      render json: { errors: user.errors.full_messages },
             status: :bad_request
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
