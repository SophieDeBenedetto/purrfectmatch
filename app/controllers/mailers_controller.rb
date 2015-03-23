class MailersController < ApplicationController

	def create
		binding.pry
	 	@user_email = params[:email][:user_email]
	  @shelter_email = params[:email][:shelter_email]
	  @content = params[:email][:content]
	  @pet_name = params[:email][:pet_name]
	  @subject = "Interested in adopting #{@pet_name}"
	  Mailer.contact_shelter(@shelter_email, @content, @subject, @user_email).deliver
	  flash.now[:notice] = 'Message sent'
	  redirect_to my_pets_path
	end


end
