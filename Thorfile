require 'thor/group'
require 'pathname'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    argument :name

    def extension_name
      name.underscore
    end

    def extension_class
      name.classify
    end

    source_root File.expand_path(File.dirname(__FILE__))

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def install_dependencies
      run 'yarn install'
    end
  end
end
