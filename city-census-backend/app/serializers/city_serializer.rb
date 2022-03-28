class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :population
  has_many :relocations
end
