class Pet < ActiveRecord::Base
  belongs_to :shelter
  has_many :pet_breeds
  has_many :breeds, through: :pet_breeds
  has_many :favorite_pets
  has_many :users, through: :favorite_pets


  # def self.species
  #   @species = ["barnyard", "bird", "cat", "dog", "horse", "pig", "reptile", "smallfurry"]
  # end

  def search
    Pet.find(:all, :conditions => conditions)
  end


  def species_conditions
    ["pets.species == params['pets']['species']"]

  end

  def zip_conditions
    ["pets.species == params['pets']['species']"]
  end

  # def random_select(array, n)
  #   result = []
  #   n.times do
  #     result << array[rand(array.length)]
  #   end
  #   result
  # end

end


