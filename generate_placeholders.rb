require 'rmagick'

def create_placeholder(name, text, bg_color, text_color)
  img = Magick::Image.new(800, 400) do
    self.background_color = bg_color
  end

  text = Magick::Draw.new
  text.annotate(img, 0, 0, 0, 0, text) do
    self.gravity = Magick::CenterGravity
    self.pointsize = 48
    self.fill = text_color
    self.font_weight = Magick::BoldWeight
  end

  img.write("images/#{name}.jpg")
  puts "Created placeholder: images/#{name}.jpg"
end

# Create placeholders for each project
create_placeholder('naerm', 'NA-ERM Project', '#3498db', '#ffffff')
create_placeholder('gnn-optimization', 'GNN Optimization', '#2ecc71', '#ffffff')
create_placeholder('drug-discovery', 'Drug Discovery', '#e74c3c', '#ffffff')
create_placeholder('cyber-threat', 'Cyber Threat Intel', '#9b59b6', '#ffffff')

puts "All placeholder images have been generated!"
