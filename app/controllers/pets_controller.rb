class PetsController < ApplicationController

  def index #index page will render search form
    @pet = Pet.new
    #send form data in params to create
  end

  def show
    @pet = Pet.find(params[:id])
  end


  def search
   animals = Pet.where(clean_params)
   @pets = []
   if params["pets"]["breed"]
     animals.each do |animal|
       animal.breeds.each do |breed|
         if breed.name == params["pets"]["breed"]
           @pets << animal
           @pets.uniq
           binding.pry
         end
       end
     end
   else
     @pets = animals
   end

   render :results
 end

  private

  def thinned_params
    params["pets"].delete_if {|k, v| v.empty?}
  end

  def clean_params
    thinned_params.permit(:species, :zip_code, :sex, :size, :age)
  end

end
