class RelocationSerializer < ActiveModel::Serializer
  attributes :id, :amount, :kind, :date, :reason, :city_id
end
