import Ember from 'ember';

export function img(params/*, hash*/) {
  let img_name = params[0];
  let img_path = 'img/' + img_name;
  return img_path;
}

export default Ember.Helper.helper(img);
