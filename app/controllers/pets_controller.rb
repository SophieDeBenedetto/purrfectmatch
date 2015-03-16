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
    @pets = Pet.where(clean_params)
    render :results
  end

  private

  def thinned_params
    params["pets"].delete_if {|k, v| v.empty?}
  end

  def clean_params
    thinned_params.permit(:species, :zip_code, :sex, :size, :breed, :age)
  end

end
