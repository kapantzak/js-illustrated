Rails.application.routes.draw do
  root 'home#index'

  # API
  get '/api/articles' => 'articles#index'

  # Remaining paths
  get '/*path' => 'home#index'
end
