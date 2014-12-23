Package.describe({
  name: 'pmuens:skeleton',
  summary: 'Wraps the popular Skeleton responsive boilerplate into a meteor package.',
  version: '0.1.0',
  git: 'https://github.com/pmuens/skeleton.git'
});

Package.onUse(function(api) {
  api.addFiles([
    'Skeleton/css/normalize.css',
    'Skeleton/css/skeleton.css'
    ], ['client']);
  });
