import { Router, Request, Response } from 'express';
import path from 'path';
import { existsSync } from "fs";
import sharp from "sharp";

const image_routes = Router();

image_routes.get('/image', (req: Request, res: Response) => {
  const imagename = req.query.imagename as string;
  const width = Number(req.query.width) as number
  const height = Number(req.query.height) as number
  const image = path.resolve('./') + `/assets/full/${imagename}.jpg`;
  const resize = path.resolve('./') + `/assets/thumb/${imagename}.jpg`;
  // If the name query wasn't provided return and end function
  if (imagename === undefined) {
    return res
      .status(400)
      .send('add image name');
  }
  if (width === undefined) {
    return res
      .status(400)
      .send('you should add width');
  }

  if (height === undefined) {
    return res
      .status(400)
      .send('you should add height');
  }

  // If the name exists in library
  if(existsSync(image) === false){
    return res
    .status(404)
    .send('image not found');
  }
  sharp(image)
  .resize(width, height)
  .toFile(resize, (err, info) => { Error });
  res.sendFile(resize);
});

export default image_routes;
