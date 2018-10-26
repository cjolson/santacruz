function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./city_assets', false, /\.(png|jpe?g|svg)$/));

const locations = {
  aptos: {
    name: 'Aptos',
    id: 'aptos',
    label: images['label_aptos.png'],
    pics: [images['aptos1.jpg'], images['aptos2.jpg'], images['aptos3.jpg'],
            images['aptos4.jpg'], images['aptos5.jpg'], images['aptos6.jpg']],
    title: `Redwoods and the Seas in One Idyllic Enviroment`,
    intro: `The picturesque town of Aptos is in an unincorporated area of Santa
    Cruz County that includes the Rio Del Mar, Seacliff and Seascape areas. It is
    also home to historic Aptos Village, and the gateway to the Forest of Nisene
    Marks State Park.`,
    must_see: [`“The Cement Ship.”  A local landmark, the S.S. Palo Alto, is
                docked at the end of the fishing pier.  An experimental concrete
                ship built as a tanker at the end of World War I, “The Cement
                Ship” now serves as an artificial reef for marine life.`,
              `Seacliff State Beach.  The perfect spot for a seaside picnic,
                complete with barbecue grills and shaded tables along the sand.
                The long stretch of sand here is a favorite spot for RV campers.`,
              `Forest of Nisene Marks State Park.  Hikers, runners and bike
                riders enjoy the 30 miles of trails where remnants of mill sites
                and trestles still exist.  The park, covering 10,000 acres and once
                clear-cut by loggers, is a testament to forest regeneration where
                second-growth redwoods coexist with new foliage.`,
              `Rio Del Mar Beach.  On the south side of the pier, Rio Del Mar
                Beach is THE spot for dog lovers and beach fires.`],
    top_five: [`Check out the locally-grown produce waits on Saturday mornings at
                the Monterey Bay Certified Farmer’s Market on the Cabrillo College
                Campus.`,
              `Stop by the visitor center at Seacliff State Beach, and learn about the Pacific
                wildlife migration pattern.`,
              `Look for The Advocate on the Old Growth Loop Trail in the Forest of
                Nisene Marks State Park.  It is the largest redwood tree in the park,
                with a circumference of 45 feet.`,
              `Find the magnolia tree on the grounds of the Bayview Hotel Bed and
                Breakfast in Aptos Village.  It is the second-oldest known magnolia
                tree in the world and the Victorian garden features a rose tree over
                130 years old.`,
              `Learn about the treasures of the Monterey Bay National Marine
                Sanctuary at the Interpretive Exhibit at Seacliff State Beach.`],
  },
  capitola: {
    name: 'Capitola & Soquel',
    id: 'capitola',
    label: images['label_capitola.png'],
    pics: [images['capitola1.jpg'], images['capitola2.jpg'], images['capitola3.jpg'],
            images['capitola4.jpg'], images['capitola5.jpg'], images['capitola6.jpg']],
    title: `Relaxed Seaside and Rural Charm`,
    intro: `Capitola’s seaside charm, combined with the rural feel of nearby
    Soquel oftentimes leave visitors longing for a more relaxed way of life in
    these small towns just south of Santa Cruz. Capitola Village, the Pacific
    coast’s oldest seaside resort town, retains the feel of a vintage beachside
    town, where galleries and boutiques decorate quaint streets as the lazy
    afternoon sun paints the colorful Venetian buildings in golden yellow light.`,
    must_see: [`Walk Capitola Village, founded over 135 years ago and the Pacific
                coast’s oldest seaside resort town, where galleries and boutiques
                decorate quaint streets.`,
              `Bargetto Winery – the longest continually operating winery in
                Santa Cruz County – serves as an ideal starting point for
                self-guided wine tasting tours where the hills above town are
                draped with vineyards.`,
              `The Capitola Historical Museum – housed inside a quaint schoolhouse
                in the village – features changing exhibits and offers a glimpse
                into the daily life of yesteryear.`,
              `Stroll quaint 165-year-old town of Soquel Village where picturesque
                shops dot the streets.`],
    top_five: [`Pick up a map at the Capitola Historical Museum and enjoy a
                self-guided walking tour of the area.`,
              `Walk to the end of Capitola Wharf, where you can rent a kayak or
                stand-up-paddleboard, fish, have lunch or just admire the scenery.`,
              `Summertime twilight concerts and outdoor movies at Esplanade Park
                adjacent to the beach serve as the perfect setting for a picnic
                dinner while relaxing on a blanket.`,
              `Browse the antique shops of Soquel Village where everything from
                heirloom jewelry to early American furniture can be found.`,
              `Ride the cable car at Shadowbrook restaurant, a landmark eatery in
                Capitola overlooking Soquel Creek.  Or, walk through the manicured
                gardens and breathe in the ambiance.`],
  },
  davenport: {
    name: 'Davenport',
    id: 'davenport',
    label: images['label_davenport.png'],
    pics: [images['davenport1.jpg'], images['davenport2.jpg'], images['davenport3.jpg'],
            images['davenport4.jpg'], images['davenport5.jpg'], images['davenport6.jpg']],
    title: 'Rugged Coastline and Solitary Beaches',
    intro: 'Eleven miles north of Santa Cruz, Davenport’s rugged yet beautiful \
    coastline overlooks windswept, solitary beaches, where translucent waves \
    crash against the rustic California ledge.',
    must_see: [`Waddell Beach. This spot is known internationally as one of the
                best spots for windsurfing because of the ever-present winds out
                of the north west.`,
              `Rancho Del Oso Nature and History Center. The center showcases both
                the natural and cultural history of the area and a large deck
                overlooking the Waddell Valley and the Pacific Ocean.`,
              `Highway 1 Drive. Davenport is the first town in Santa Cruz County
                visitors will encounter travelling south on Highway 1 from San
                Francisco. Some of the more expansive, scenic vistas can be
                enjoyed on this drive.`,
              `Wilder Ranch State Park. Wetland and riparian habitats thrive,
                among thirty-four miles of trails for hiking and mountain biking
                along the ocean bluffs or up grassy terraces.`,
              `The historic Meder farmhouse at Wilder Ranch State Park has been
                restored to its early 1900s grandeur with appropriate replica
                furnishings and interpretive supplies.`],
    top_five: [`The Davenport Jail, built in 1914 and used only twice.  It is
                now a museum which houses natural artifacts.`,
              `Lundberg Studios, where masterpieces are shown in the gallery and
                discounted “seconds” are also available.`,
              'Scour the beaches of the Davenport coastline for sea glass.',
              `Stop off at a u-pick farm, where you can harvest your own
                strawberries, ollalieberries and kiwi fruit.`,
              `View migrating gray and humpback whales pass by every year from
                the bluffs at Davenport – the perfect vantage point!`],
  },
  sanlorenzovalley: {
    name: 'San Lorenzo Valley',
    id: 'sanlorenzovalley',
    label: images['label_slv.png'],
    pics: [images['slv1.jpg'], images['slv2.jpg'], images['slv3.jpg'],
            images['slv4.jpg'], images['slv5.jpg'], images['slv6.jpg']],
    title: 'Wind Your Way Through the Redwoods',
    intro: `The San Lorenzo River begins in the Santa Cruz Mountains, winding its
    way through Ben Lomond, Boulder Creek, Brookdale and Felton before spilling
    into the Monterey Bay. Once home to a bustling logging industry, the mountains
    returned to their natural state, where old and second-growth redwood trees have
    sprung back to life.`,
    must_see: [`The Felton Covered Bridge, considered to be the tallest covered
                bridge in the United States, was the main entry point for Felton
                for 45 years and spans 80 feet over the San Lorenzo River.`,
              `Roaring Camp Railroads hosts nostalgic rides through the redwoods
                aboard vintage steam locomotives.  Roaring Camp also hosts year-round,
                family-friendly festivities like a Starlight Evening, a visit from
                Thomas the Tank Engine, a Civil War re-enactment over Memorial Day
                Weekend, and a Fourth of July Celebration.`,
              `Big Basin Redwoods State Park is California’s oldest – established
                in 1902 – and is home to the largest continuous stand of ancient
                Coast Redwoods south of San Francisco.`,
              `Visiting skate boarders can grind at the 8,500 square-foot Jim
                Keefe Skate Park at Highlands County Park in Ben Lomond.`,
              `The Redwood Loop Trail at Henry Cowell Redwoods State Park.
                This stroller and wheelchair-friendly trail is just shy of a mile
                long, and is lush with old growth redwood trees.  Nearby are horse
                and dog-friendly trails.`],
    top_five: [`Hit a round at the Boulder Creek Golf & Country Club, surrounded
                by majestic redwood trees.`,
              `Borrow a flashlight from the visitor center at Henry Cowell Redwoods
                State Park and crawl inside the John C. Fremont tree, hollowed out
                by fire and once used as a resort honeymoon room.`,
              `Visit the secluded lake at the Loch Lomond Recreation Area, where
                vistas and trails abound.`,
              `Look for the remains of old logging operations, lime quarries
                and kilns of bygone days at Fall Creek in Henry Cowell Redwoods
                State Park.`,
              `Find the sea fossils embedded in the side of the mountain as you
                ride the steam train at Roaring Camp up Bear Mountain, evidence that
                millions of years ago this region was under the sea.`],
  },
  santacruz: {
    name: 'Santa Cruz',
    id: 'santacruz',
    label: images['label_santacruz.png'],
    pics: [images['santacruz1.jpg'], images['santacruz2.jpg'], images['santacruz3.jpg'],
            images['santacruz4.jpg'], images['santacruz5.jpg'], images['santacruz6.jpg']],
    title: `The Perfect Beachside Destination`,
    intro: `Santa Cruz is undoubtedly the quintessential California beach town,
    awakening nostalgic memories of summers past and inspiring a new generation.
    But while Santa Cruz is the classic spot to dig your toes into the warm sand
    and soak up the sun, the fun only begins at the beach.`,
    must_see: [`Santa Cruz Beach Boardwalk. The legendary Boardwalk features the
                Giant Dipper, a vintage wooden roller coaster that has thrilled
                visitors for over 90 years. Seventy-three hand-carved horses
                prance proudly around the famous Looff Carousel, built in 1911.`,
              `Seymour Marine Discovery Center at Long Marine Lab. This renowned
                research facility, affiliated with UC Santa Cruz, features aquariums
                and marine exhibits. Ms. Blue, one of the world’s largest blue whale
                skeletons rests adjacent to the facility.`,
              `Santa Cruz Wharf. The Santa Cruz Wharf celebrated its 100th
                Anniversary just last year. Stretching out a half-mile into the
                waters of the Monterey Bay, the wharf is lined with shops and
                restaurants.`,
              `Santa Cruz Surfing Museum. Housed inside the Mark Abbott Memorial
                Lighthouse, this diminutive museum chronicles over 120 years of
                surfing history in Santa Cruz. Just outside sits a plaque donated
                by the descendants of Hawaiian royalty who brought surfing to the mainland.`,
              `University of California at Santa Cruz. Sitting atop a sprawling
                hillside, the University’s performance halls, galleries, arboretum,
                and trails are all open to visitors.`,
              `Downtown Santa Cruz. Anchored by a clock tower, this lively town
                center features pedestrian-friendly, tree-lined streets populated
                with boutiques, art galleries, and sidewalk performers. A vibrant
                weekly downtown farmer’s market and a monthly antiques street
                faire add to its charm.`],
    top_five: [`In the fall, bring your binoculars to Natural Bridges State Beach,
                when thousands of monarchs spend their winters in a protected
                eucalyptus grove.`,
              `Take in one of the best views in town on a bluff overlooking
                Downtown Santa Cruz where the last original building of the Santa
                Cruz Mission stands.`,
              `Explore West Cliff Drive, a scenic three mile path between Natural
                Bridges State Beach and the Santa Cruz Wharf.`,
              `Stop by the Monterey Bay National Marine Sanctuary Exploration
                Center, which features dynamic, ocean-related exhibits.`,
              `Public murals and artwork accentuate downtown’s cosmopolitan
                flavor, including the bronze sculpture of musician Tom Jefferson
                Scribner playing the musical saw, which greets visitors on Pacific
                Avenue.`],
  },
  scottsvalley: {
    name: 'Scotts Valley',
    id: 'scottsvalley',
    label: images['label_scottsvalley.png'],
    pics: [images['scottsvalley1.jpg'], images['scottsvalley2.jpg'], images['scottsvalley3.jpg'],
            images['scottsvalley4.jpg'], images['scottsvalley5.jpg'], images['scottsvalley6.jpg']],
    title: `Gateway to the Santa Cruz Mountains`,
    intro: `Scotts Valley, located amidst the area's dramatic redwood forests
    in the western region of the Santa Cruz Mountains, is a small suburban
    community with a proud link to the past. Once a stagecoach stop between
    San Jose and Santa Cruz, Scotts Valley’s deep history goes back more than
    150 years. Today, it serves as a vacation spot for both leisure and business
    travelers.`,
    must_see: [`The Hiram D. Scott House, built in 1853 is a Santa Cruz County
                Historical Trust Landmark, and is listed on the National Register
                of Historic Places.`,
              `Scotts Valley’s Skypark is the only place in Santa Cruz County to
                see fireworks on the Fourth of July.`,
              `Celebrated movie director Alfred Hitchcock, Scotts Valley's most
                famous resident lived in a mountaintop estate for three decades
                beginning in 1940, which is now a winery. Click here for a list
                of tasting rooms.`,
              `The annual Scotts Valley Art & Wine Festival will delight art
                lovers with over 100 local artists specializing in glass, ceramic,
                painting, metal work and other forms. Local wine tasting, food,
                music and a kid’s art tent round out the festivities.`],
    top_five: [`Visiting with Fido? Skypark’s dog park includes a special area
                for both large and small dogs.`,
              `Make Scotts Valley your basecamp as you explore nearby local and
                state parks. An array of outdoor options like tennis, golf,
                skateboarding, and basketball are all close by.`,
              `April through October, visit the Scotts Valley Farmer's Market,
                where food artisans display a unique mix of fruits and vegetables
                as well as baked goods, fresh meats, sausages and seafood, and
                prepared foods. During the summer months, enjoy live music.`,
              `Skateboarders will delight at the Tim Brauch Memorial Skatepark,
                a 22,000 square foot concrete playground.`,
              `Look for historical murals in town, which pay tribute to the
                history of the area and the people who have contributed to the
                community.`]
              }
};

export default locations;
