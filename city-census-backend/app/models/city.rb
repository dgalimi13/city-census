class City < ApplicationRecord
    has_many :relocations
    validates :name, :population, presence: true
end
