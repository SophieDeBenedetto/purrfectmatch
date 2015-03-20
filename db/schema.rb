# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150319210930) do

  create_table "breeds", force: :cascade do |t|
    t.string "name"
  end

  create_table "favorite_pets", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "pet_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pet_breeds", force: :cascade do |t|
    t.integer "pet_id"
    t.integer "breed_id"
  end

  create_table "pets", force: :cascade do |t|
    t.string   "name"
    t.string   "sex"
    t.string   "age"
    t.string   "size"
    t.string   "picture"
    t.string   "shelter_id"
    t.text     "description"
    t.datetime "last_update"
    t.string   "shelter_name"
    t.string   "type_name"
    t.string   "species"
    t.string   "zip_code"
  end

  create_table "shelters", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "city"
    t.string "zip"
    t.string "code"
    t.string "state"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
