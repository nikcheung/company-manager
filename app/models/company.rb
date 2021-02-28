class Company < ApplicationRecord
  QUERYABLE_FIELDS = %w[name location industry]
end
