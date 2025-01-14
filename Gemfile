source "https://rubygems.org"

# Jekyll version, consider upgrading to a more recent version
gem "jekyll", "4.3.3"

# Default theme for new Jekyll sites
gem "minima", "~> 2.0"

# Use GitHub Pages if required
# gem "github-pages", group: :jekyll_plugins

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
  gem "jekyll-sitemap", "~> 1.4.0"  # Latest compatible version of jekyll-sitemap
  gem "sassc", "~> 2.4"  # Sassc for modern Sass compatibility
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# Add missing libraries for Ruby 3.4+ compatibility
gem 'csv'
gem 'base64'
gem 'bigdecimal'

# Add rexml gem for Jekyll dependencies
gem "rexml"
