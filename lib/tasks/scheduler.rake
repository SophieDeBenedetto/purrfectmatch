require_relative '../assets/pet_scraper.rb'

namespace :db do 
  desc "This task is called by the Heroku scheduler add-on"

  task :seed => :environment do
    PetScraper.scrape_and_populate
  end
end