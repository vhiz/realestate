import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectDB";
import Listing from "@/models/Listing";
import { getSession } from "@/lib/getSession";

export async function GET() {
  connectToDB();
  try {
    const listings = await Listing.find();
    //return only the listingId an userId
    const filtered = listings.map((list) => {
      return {
        _id: list._id,
        userId: list.userId,
        type: list.type,
        title: list.title,
        city: list.city,
        address: list.address,
        img: list.images[0],
        price: list.price,
        bathRooms: list.bathRooms,
        latitude: list.latitude,
        longitude: list.longitude,
        bedRooms: list.bedRooms,
        createdAt: list.createdAt,
      };
    });

    return NextResponse.json(filtered, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}

export async function POST(request) {
  const session = await getSession();

  if (!session.isLoggedIn)
    return NextResponse.json(
      { msg: "You have to log in before using this route" },
      { status: 403 }
    );
  const body = await request.json();
  const {
    title,
    price,
    images,
    bedRooms,
    bathRooms,
    type,
    size,
    latitude,
    longitude,
    city,
    address,
    school,
    bus,
    restaurant,
    desc,
    policies,
  } = body;

  try {
    const newList = new Listing({
      title,
      price,
      images,
      bedRooms,
      bathRooms,
      userId: session.userId,
      type,
      size,
      latitude,
      longitude,
      city,
      address,
      school,
      bus,
      restaurant,
      desc,
      policies,
    });
    await newList.save();
    return NextResponse.json(newList, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
