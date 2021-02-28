Rails.application.routes.draw do
  root 'homepage#index'
  resources :companies, only: %i[index create show update destroy], defaults: { format: :json }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
