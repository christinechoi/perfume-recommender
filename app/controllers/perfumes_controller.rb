class PerfumesController < ApplicationController

  def index
    @perfumes = Perfume.all 
    render :json => @perfumes 
  end

  def create
    @perfume = Perfume.new(perfume_params)
    if @perfume.save 
      render :json => @perfume
    else
      render json: {
        errors: @perfume.errors.full_messages.join(' ')
      }, status: 403
    end
  end

private

  def perfume_params
    params.require(:perfume).permit(:name, :brand, :url)
  end

end
