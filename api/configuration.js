import {neon} from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
    try {
        const data = await sql 
        `
            SELECT * FROM full_performance_list WHERE roundtype_id = 'RT-0001' AND competition_id = 'CP-0004'
        `;

        /* 
            Note:
            Untuk BICF15, competition_id = CP-0004
            Untuk IBCF 2026, competition_id = CP-0007
            Untuk SWCF 2026, competition_id = CP-0005
            Untuk YWCF 2027, competition_id = CP-0006
        
        */

        res.status(200).json(data);
    }

    catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}