class Api::V1::RelocationsController < ApplicationController

    before_action :set_city

        def index 
            @relocations = Relocation.all
            render json: @relocations
        end 

        def show
            @relocation = Relocation.find(params[:id])
            render json: @relocation
        end 
    
        def create
            @relocation = @city.relocations.new(relocation_params)
            if @city.update_population(@relocation) != 'Population cannot be less than 0'
                @relocation.save
                render json: @city
            else 
                render json: {error: 'Population cannot be less than 0'}
            end 
        end 
    
        def destroy
            @relocation = Relocation.find(params[:id])
            @relocation.destroy
        end 
    
        private

        def set_city
            @city = City.find(params[:city_id])
        end 
    
        def relocation_params
            params.require(:relocation).permit(:amount, :city_id, :kind, :date, :reason)
        end 

end
