class Mailer < ActionMailer::Base
	default :from     => 'purrfectmatch.adopt@gmail.com',
          :reply_to => @user_email

		def contact_shelter(shelter_email, content, subject)
			# @shelter_email =  shelter_email
			# @content = content
			# @subject = subject
			mail(to: 'purrfectmatch.adopt@gmail.com',
		   		 body: content,
		   		 subject: subject)
		end

end
