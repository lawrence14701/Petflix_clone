Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    namespace :api, defaults: {format: :json} do      
      resource :session, only: [:create,:destroy]
      
      resources :users, only: [:create,:show,:destroy] do
        resources :watchlists, only: [:create,:show,:index,:destroy]
      end

      resources :genres, only: [:show,:index]

      resources :movies, only: [:show,:index]
    end



    root to: "static_pages#root"
end
