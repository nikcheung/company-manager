class CompaniesController < ApplicationController
  def index
    if valid_query?
      render json: index_collection
    else
      render :bad_request
    end
  end

  def show
    render json: company
  end

  def create
    render json: Company.create!(company_params)
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
    params.require(:company).permit(:name, :location, :industry)
  end

  def company
    @company ||= Company.find params.require(:id)
  end

  def query_params
    params.permit :parameter, :value, :format
  end

  def valid_query?
    query_params[:parameter].blank? || Company::QUERYABLE_FIELDS.include?(query_params[:parameter])
  end

  def index_collection
    return Company.all unless query_params[:parameter]

    Company.where("#{query_params[:parameter]} ilike ?", "%#{query_params[:value]}%")
  end
end
