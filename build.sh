git submodule update --init  # this gets the submodule repo at the commit it was when the parent committed
cd Skeleton
git fetch; git checkout master  # actually update the submodule
cd -
