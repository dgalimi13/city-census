class City < ApplicationRecord
    has_many :relocations
    validates :name, :population, presence: true

    def update_population(relocation)
        if relocation.kind == 'arrival'
            self.population = self.population + relocation.amount
            self.save
        elsif relocation.kind == 'departure'
            if self.population >= relocation.amount
            self.population = self.population - relocation.amount
            self.save
            else
                return 'Population cannot be less than 0'
            end 
        end 
    end 

    def update_population_on_delete(relocation)
        if relocation.kind == 'arrival'
            if self.population >= relocation.amount
            self.population = self.population - relocation.amount
            self.save
            else
                return 'Population cannot be less than 0'
            end 
        elsif relocation.kind == 'departure'
            self.population = self.population + relocation.amount
            self.save
        end 
    end 

end
