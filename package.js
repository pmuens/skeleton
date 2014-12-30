Package.describe({
  name: 'skeleton:skeleton',
  summary: 'Skeleton (official): A Dead Simple, Responsive Boilerplate for Mobile-Friendly Development',
  version: '2.0.4',
  git: 'https://github.com/pmuens/skeleton.git'
});

Package.onUse(function(api) {
  api.addFiles([
    'Skeleton/css/normalize.css',
    'Skeleton/css/skeleton.css'
    ], ['client']);
  });
