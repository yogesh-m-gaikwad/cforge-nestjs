import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { User, UserDocument } from "./schemas/user.schema";
import { jwtConfig } from "../config/jwt.config";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async register(email: string, password: string) {
    const existing = await this.userModel.findOne({ email });

    if (existing) {
      throw new BadRequestException("User already exists");
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      email,
      password: hashed,
    });

    return {
      id: user._id.toString(),
      email: user.email,
    };
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const token = jwt.sign(
      {
        sub: user._id.toString(),
        email: user.email,
      },
      jwtConfig.secret,
      {
        expiresIn: jwtConfig.expiresIn,
      },
    );

    return {
      accessToken: token,
    };
  }
}
