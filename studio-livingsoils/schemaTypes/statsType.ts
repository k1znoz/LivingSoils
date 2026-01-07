export const statsType = {
  name: 'siteStats',
  title: 'Site Stats',
  type: 'document',
  // keep it as a singleton in the studio
  __experimental_actions: ["update", "publish"],
  fields: [
    { name: 'wasteValued', title: 'Déchets valorisés/mois', type: 'string' },
    { name: 'fertilizerProduced', title: 'Fertilisant produit', type: 'string' },
    { name: 'proteinsProduced', title: 'Protéines produites', type: 'string' },
    { name: 'hectaresRegenerated', title: 'Hectares régénérés', type: 'string' },
    { name: 'chickensFed', title: 'Poulets nourris', type: 'string' },
    { name: 'costReduction', title: 'Réduction des coûts', type: 'string' },
    { name: 'chemicalElimination', title: 'Produits chimiques éliminés', type: 'string' },
    { name: 'jobsCreated', title: 'Emplois créés', type: 'string' },
    { name: 'directJobs', title: 'Emplois directs', type: 'number' },
    { name: 'indirectJobs', title: 'Emplois indirects', type: 'number' },
    { name: 'womenTrained', title: 'Femmes formées', type: 'string' },
    { name: 'farmCountOverride', title: 'Nombre de fermes (override)', type: 'number' }
  ],
  preview: {
    select: {
      title: 'wasteValued',
      subtitle: 'costReduction'
    }
  }
}
