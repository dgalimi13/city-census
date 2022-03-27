class Relocation < ApplicationRecord
    belongs_to :city
    validates :amount, prescense: true
    validates_inclusion_of :type, :in => ['arrival', 'departure']
end
