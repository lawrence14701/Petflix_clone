class Watchlist < ApplicationRecord

    validates :user_id, :movie_id, presence: true

#     belongs_to :user
    
#    has_many :movie

    
end