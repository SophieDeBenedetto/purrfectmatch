class PetsController < ApplicationController

  def index #index page will render search form
    @pet = Pet.new
    #send form data in params to create
  end

  def show
    @pet = Pet.find(params[:id])
  end


  def search
    # binding.pry
    animals = Pet.where(clean_params)
    # binding.pry
    if params["pets"]["breeds"]
      @pets = animals.select {|animal| animal.breeds.include?(params["pets"]["breed"])}
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
