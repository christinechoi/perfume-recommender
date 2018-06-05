class ApplicationController < ActionController::API
  # require 'json_web_token'
  include Knock::Authenticable
  # before_action :authenticate 

# end  
  protected


  def fallback_index_html
    render :file => 'public/index.html'
  end

  def invalid_authentication
    render json: {error: 'Invalid Request'}, status: :unauthorized
  end

  private
  

  def load_current_user!
    @current_user = User.find_by(id: payload[0]['user_id'])
  end

end
