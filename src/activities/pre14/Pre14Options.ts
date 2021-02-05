import Option from '../mat4/entities/option.entity';

export default interface Pre14Options {
  bee: Pre14Option;
  tree: Pre14Option;
  handFan: Pre14Option;
  ring: Pre14Option;
}

interface Pre14Option extends Option {
  rotate: number;
}
