class WelcomeController < ApplicationController
	# for test purposes callback to user auth at the root welcome#index
	# before_action :authenticate_user!
	def index
		@pets = random_select(Pet.all, 50)

	end


	private

	def random_select(array, n)
    result = []
    n.times do
      result << array[rand(array.length)]
    end
    result
  end
end
