Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #this is the endpoint to which app will send requests for authorization
  mount Knock::Engine => "/knock"

  #add our register route

  post 'signup', to: 'users#create'
  get 'users', to: 'users#index'
  
  resources :perfumes

  resources :users, only: :create do
    collection do
      post 'login'
    end
  end 

  get '*path', to: "application#fallback_index_html", constraints: -> 
  (request) do
    !request.xhr? && request.format.html?
  end

end
