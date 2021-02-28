class CompaniesController < ApplicationController
  def index
    render json: Company.all
  end

  def show
    render json: company
  end

  def create
    # bang or not?
    Company.create! company_params
  end

  def update
    if company.update company_params
      render json: company
    else
      render json: company.errors
    end
  end

  def destroy
    render json: company.destroy!
  end

  private

  def company_params
  end

  def company
    @company ||= Company.find params.require(:id)
  end
end
