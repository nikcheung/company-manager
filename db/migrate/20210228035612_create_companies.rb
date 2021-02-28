class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.text :name
      t.text :location
      t.text :industry

      t.timestamps
    end
  end
end
