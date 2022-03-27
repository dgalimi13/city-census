class Api::V1::RelocationsController < ApplicationController

        def index 
            @relocations = Relocation.all 
            render json: @relocations
        end 
    
        def create
            @relocation = Relocation.new(relocation_params)
            if @relocation.save 
                render json: @relocation 
            else 
                render json: {error: 'Error creating relocation'}
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
    
        def relocation_params(params)
            params.require(:relocation).permit(:amount, :city_id, :kind, :date, :reason)
        end 
        
    end

end
