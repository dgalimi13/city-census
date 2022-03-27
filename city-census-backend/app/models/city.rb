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
end
