class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :update_sanitized_params, if: :devise_controller?
  protect_from_forgery


  def login_required
    if !logged_in?
      flash[:notice] = "Log In to see your favorite pets!"
      redirect_to root_path
    end
  end

  def update_sanitized_params
    devise_parameter_sanitizer.for(:sign_up) << :name
  end
  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id].present?
  # end

  # helper_method :current_user

  # def login(user)
  #   session[:user_id] = user.id
  # end

  def logged_in?
    !!current_user
  end
end
