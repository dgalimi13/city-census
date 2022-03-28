class Api::V1::RelocationsController < ApplicationController

    before_action :set_city

        def index 
            @relocations = @city.relocations
            render json: @relocations
        end 
    
        def create
            @relocation = @city.relocations.new(relocation_params)
            if @city.update_population(@relocation) != 'Population cannot be less than 0'
                @transaction.save
                render json: @relocation 
            else 
                render json: {error: 'Population cannot be less than 0'}
            end 
        end 
    
        def show
            @relocation = Relocation.find(params[:id])
            render json: @relocation
        end 
    
        def destroy
            @relocation = Relocation.find(params[:id])
            @relocation.destroy
        end 
    
        private

        def set_city
            @city = City.find(params[:city_id])
        end 
    
        def relocation_params(params)
            params.require(:relocation).permit(:amount, :city_id, :kind, :date, :reason)
        end 
        
    end

end
