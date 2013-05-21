get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/username' do
  p params
  redirect '/game'
end

get '/game' do
  @p1_URL = params[:p1]
  @p2_URL = params[:p2]
  erb :game
end
