class Mailer < ActionMailer::Base
	default :from     => 'purrfectmatch.adopt@gmail.com'
          # :reply_to => @user_email

		def contact_shelter(shelter_email, content, subject, user_email)
			@shelter_email =  shelter_email
			@content = content
			@subject = subject
			@user_email = user_email
			mail(to: shelter_email,
		   		 body: content,
		   		 subject: subject,
		   		 reply_to: user_email)
		end

end
