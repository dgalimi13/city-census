class Api::V1::CitiesController < ApplicationController

        def index 
            @citys = City.all 
            render json: @cities
        end 
    
        def create
            @city = City.new(city_params)
            if @city.save 
                render json: @city 
            else 
                render json: {error: 'Error creating city'}
        end 
    
        def show
    
        end 
    
        def destroy
    
        end 
    
        private
    
        def city_params(params)
            params.require(:city).permit(:name, :population)
        end 
        
    end
    
end
