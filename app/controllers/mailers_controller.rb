class MailersController < ApplicationController

	 def create
	 	# binding.pry
	 	@user_email = params[:user_email]
	   @shelter_email = params[:shelter_email]
	  @content = params[:content]
	  @subject = params[:subject]
	  Mailer.contact_shelter(@shelter_email, @content, @subject).deliver
	  flash.now[:notice] = 'Message sent'
	  redirect_to my_pets_path
	end


end
