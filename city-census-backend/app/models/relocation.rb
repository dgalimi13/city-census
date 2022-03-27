class Relocation < ApplicationRecord
    belongs_to :city
    validates :amount, presence: true
    validates_inclusion_of :kind, :in => ['arrival', 'departure']
end
