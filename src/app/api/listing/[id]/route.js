import Listing from "@/models/Listing";
import { NextResponse } from "next/server";

export async function GET(request,{ params }) {
  const id = params.id;

  try {
    const listing = await Listing.findById(id);
    if (!listing) return NextResponse.json({ msg: false }, { status: 404 });

    return NextResponse.json(listing, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 400 }
    );
  }
}
