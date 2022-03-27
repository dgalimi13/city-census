class CreateRelocations < ActiveRecord::Migration[6.1]
  def change
    create_table :relocations do |t|
      t.integer :city_id
      t.integer :amount
      t.string :type
      t.datetime :date
      t.string :reason

      t.timestamps
    end
  end
end
