Rails.application.routes.draw do

    namespace :api do 
      namespace :v1 do
        resources :cities do
        resources :relocations
        end 
      end 
    end 
  
end   
